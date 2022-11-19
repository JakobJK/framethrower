-- deploy flipr:framethrower_public.function.register_submission to pg

begin;
  create or replace function framethrower_public.register_submission(
    _thumbnail_url text,
    _comment text,
    _upload_id uuid,
    _animation_id text,
    _profile_id uuid,
    _pro_feedback boolean,
    _start_frame integer,
    _end_frame integer,
    _frame_rate text,
    _audio boolean
    )returns framethrower_public.animation_submission as $$
    declare submission framethrower_public.submission;
    declare animation framethrower_public.animation;
    declare upload framethrower_hidden.upload;
    declare animation_submission framethrower_public.animation_submission;
    declare amount_of_feedbacks integer;
    begin
      select coalesce((select built_in_feedback from framethrower_public.premium where premium.profile_id = _profile_id), 0) into amount_of_feedbacks;
      select * into upload from framethrower_hidden.upload where id = _upload_id;
      select * into animation from framethrower_public.animation where id = _animation_id;
      insert into framethrower_public.submission
        (video_url, animation_id, comment, short_comment, thumbnail_url, start_frame, end_frame, frame_rate, audio)
      values
        (upload.file_url, _animation_id, _comment, left(_comment, 200), _thumbnail_url, _start_frame, _end_frame, _frame_rate, _audio)
      returning * into submission;
      if _pro_feedback = TRUE and amount_of_feedbacks > 0 then
        insert into framethrower_public.feedback_request (animation_id) values (_animation_id);
        update framethrower_public.premium set built_in_feedback = premium.built_in_feedback - 1 where premium.profile_id = _profile_id;
      end if;
      select
        animation.id,
        animation.title,
        animation.profile_id,
        submission.id,
        submission.start_frame,
        submission.end_frame,
        submission.thumbnail_url,
        submission.video_url,
        submission.comment,
        submission.created_at
      into animation_submission;
      return animation_submission;
    end;
  $$ language plpgsql strict security definer;
  grant execute on function framethrower_public.register_submission to framethrower_user, framethrower_moderator, framethrower_admin;

commit;