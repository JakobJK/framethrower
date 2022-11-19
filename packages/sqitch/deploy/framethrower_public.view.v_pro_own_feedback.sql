-- Deploy framethrower:framethrower_public.view.v_pro_own_feedback to pg

begin;

  create view framethrower_public.v_pro_own_feedback as
    select distinct on (feedback_request.id, feedback_response.id)
    feedback_response.id,
    animation.id animation_id,
    animation.title,
    coalesce(feedback_response.status, 'unclaimed') response_status,
    feedback_response.submission_id,
    feedback_request.created_at,
    submission.id latest_submission_id,
    case
      when feedback_response.status = 'processed' then instructor.username
      else null
    end as username,
     case
      when feedback_response.status = 'processed' then instructor.avatar
      else null
    end as avatar
    from framethrower_public.feedback_request
    left join framethrower_public.feedback_response ON feedback_request.id = feedback_response.feedback_request_id
    left join framethrower_public.profile instructor ON feedback_response.profile_id = instructor.id
     join framethrower_public.animation ON animation.id = feedback_request.animation_id
     join framethrower_public.submission ON submission.animation_id = animation.id
    where animation.profile_id = current_setting('jwt.claims.id', true)::uuid;

  grant select on framethrower_public.v_pro_own_feedback to framethrower_user, framethrower_moderator, framethrower_admin;

commit;
