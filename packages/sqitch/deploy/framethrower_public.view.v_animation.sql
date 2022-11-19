-- Deploy flipr:framethrower_public.view.v_animation to pg
begin;
  create view framethrower_public.v_animation as
  select
    anim.id as animation_id,
    anim.title,
    anim.profile_id,
    sub.start_frame,
    sub.created_at,
    sub.updated_at,
    sub.end_frame,
    prof.username,
    prof.avatar,
    framethrower_public.profile_is_instructor(prof.*) as instructor,
    framethrower_public.profile_premium_type(prof.*) as premium_type,
    framethrower_public.submission_current_profile_has_replied(sub.*) as current_profile_has_replied,
    prof.role,
    prof.occupation,
    prof.organisation,
    (feedback.id is not null) as profeedback,
    coalesce(request.status, 'none'::framethrower_public.feedback_request_status) as profeedback_status,
    sub.comment,
    sub.thumbnail_url,
    sub.video_url,
    sub.audio,
    sub.frame_rate,
    framethrower_public.submission_is_latest(sub) as is_latest,
    sub.id as submission_id
    from framethrower_public.animation anim
    join framethrower_public.submission sub on sub.animation_id = anim.id
    join framethrower_public.profile prof on anim.profile_id = prof.id
    full join framethrower_public.feedback_response feedback on feedback.submission_id = sub.id
    full join framethrower_public.feedback_request request on request.animation_id = anim.id
    where anim.status = 'published'
    and sub.status = 'published';
    grant select on framethrower_public.v_animation to framethrower_inactive, framethrower_banned, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;
commit;