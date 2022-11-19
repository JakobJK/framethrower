-- Deploy flipr:framethrower_public.view.v_your_feedback to pg

begin;

  create view framethrower_public.v_instructor_feedback as
    select
    feed.id,
    feed.submission_id,
    feed.status,
    feed.created_at,
    anim.title,
    sub.start_frame,
    sub.end_frame,
    sub.short_comment,
    sub.animation_id,
    prof.username,
    prof.avatar
    from framethrower_public.feedback_response feed
    join framethrower_public.submission sub on sub.id = feed.submission_id
    join framethrower_public.animation anim on anim.id = sub.animation_id
    join framethrower_public.profile prof on prof.id = anim.profile_id
    where feed.status != 'pending' and feed.profile_id = current_setting('jwt.claims.id', true)::uuid
    order by feed.created_at desc;

    grant select on framethrower_public.v_instructor_feedback to
    framethrower_user,
    framethrower_moderator,
    framethrower_admin;

commit;