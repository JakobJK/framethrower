-- Deploy flipr:framethrower_public.view.v_feedback to pg

begin;
  create view framethrower_public.v_feedback as
    select
      res.id,
      prof.id as profile_Id,
      prof.username,
      prof.avatar,
      res.created_at,
      res.submission_id,
      res.updated_at,
      res.profile_id as instructor_id,
      res.thumbnail,
      case
        when
          anim.profile_id = current_setting('jwt.claims.id', true)::uuid
        then res.link
        when
          'pro' = current_setting('jwt.claims.premium', true)
        then res.link
        when
          'active' = current_setting('jwt.claims.instructor', true)
        then res.link
        when
          'framethrower_admin' = current_setting('jwt.claims.role', true)
        then res.link
        else null
      end as link,
      case
        when
          anim.profile_id = current_setting('jwt.claims.id', true)::uuid
        then true
        when
          'pro' = current_setting('jwt.claims.premium', true)
        then true
        when
          'active' = current_setting('jwt.claims.instructor', true)
        then true
        when
          'framethrower_admin' = current_setting('jwt.claims.role', true)
        then true
        else false
      end as allowed,
      res.status from framethrower_public.feedback_response res
      join framethrower_public.feedback_request req ON req.id = res.feedback_request_id
      join framethrower_public.profile prof on prof.id = res.profile_id
      join framethrower_public.animation anim on anim.id = req.animation_id where res.status = 'processed' and req.status = 'fulfilled';
    grant select on framethrower_public.v_feedback to framethrower_banned, framethrower_inactive, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;
commit;