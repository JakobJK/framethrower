-- Deploy flipr:framethrower_public.function.register_tumbleweed to pg

begin;
  create or replace function framethrower_public.register_tumbleweed()returns framethrower_public.bundle_weed as $$
    declare submission_id text;
    declare bundle_weed framethrower_public.bundle_weed;
    begin
      insert into framethrower_public.tumbleweed (submission_id) select submission.id from framethrower_public.submission
      full join framethrower_public.tumbleweed ON tumbleweed.submission_id = submission.id
      full join framethrower_public.note ON note.submission_id = submission.id
      where submission.created_at + interval '7 days'  < now()
      and tumbleweed.id is null
      and note.id is null
      and framethrower_public.submission_is_latest(submission.*) = True limit 1
      returning tumbleweed.submission_id into submission_id;
      if submission_id is null then
        return null;
      end if;
      select
        animation.id as animation_id,
        animation.title,
        animation.profile_id,
        submission.id as submission_id,
        submission.start_frame,
        submission.end_frame,
        submission.thumbnail_url,
        submission.video_url,
        submission.comment,
        submission.created_at,
        profile.username,
        profile.avatar
        from framethrower_public.submission
        join  framethrower_public.animation ON animation.id = submission.animation_id
        join framethrower_public.profile ON profile.id = animation.profile_id
        where submission.id = submission_id
        into bundle_weed;
      return bundle_weed;
    end;
  $$ language plpgsql strict;
commit;