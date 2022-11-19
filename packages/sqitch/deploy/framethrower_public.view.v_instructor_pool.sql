-- Deploy flipr:framethrower_public.view.v_pool to pg

begin;
  create view framethrower_public.v_instructor_pool as
      select distinct on (feed_rq.id)
      feed_rq.id,
      feed_rq.animation_id,
      anim.title,
      sub.start_frame,
      sub.end_frame,
      prof.username,
      prof.avatar,
      feed_rq.status as request_status,
      feed_rq.created_at,
      feed_rq.updated_at,
      coalesce(feed_rp.status, 'unclaimed') as response_status,
      sub.id as submission_id,
      sub.short_comment,
      sub.thumbnail_url,
      sub.created_at as latest_submission
    from framethrower_public.feedback_request feed_rq
    join framethrower_public.animation anim on feed_rq.animation_id = anim.id
    join framethrower_public.profile prof on anim.profile_id = prof.id
    join framethrower_public.submission sub on sub.animation_id = anim.id
    left join framethrower_public.feedback_response feed_rp on feed_rp.feedback_request_id = feed_rq.id
    where feed_rq.status = 'requested' and (coalesce(feed_rp.status, 'unclaimed') = 'conceded' or coalesce(feed_rp.status, 'unclaimed') = 'unclaimed')
    order by feed_rq.id, sub.created_at desc;
    grant select on framethrower_public.v_instructor_pool to
    framethrower_user,
    framethrower_moderator,
    framethrower_admin;
commit;

