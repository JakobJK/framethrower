-- Deploy flipr:framethrower_public.view.v_admin_feedback_overview to pg

begin;
  create view framethrower_public.v_admin_feedback_overview as
   select res.id, res.feedback_request_id, res.created_at, res.profile_id, anim.title, author.username, author.avatar, res.submission_id, req.animation_id,
   extract(month from res.created_at)::integer as month,
   extract(year from res.created_at)::integer as year
   from framethrower_public.feedback_response res
   join framethrower_public.feedback_request req ON req.id = res.feedback_request_id
   join framethrower_public.animation anim on anim.id = req.animation_id
   join framethrower_public.profile author on author.id = anim.profile_id
   join framethrower_public.profile prof on prof.id = res.profile_id
   where res.status = 'processed';
   grant select on framethrower_public.v_admin_feedback_overview to framethrower_admin;
commit;