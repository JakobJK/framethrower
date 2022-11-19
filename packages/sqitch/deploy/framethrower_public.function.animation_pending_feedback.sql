-- Deploy flipr:framethrower_public.function.animation_pending_feedback to pg

begin;

  create function framethrower_public.animation_pending_feedback(animation framethrower_public.animation) returns boolean  as $$
    select exists(select * from framethrower_public.animation anim join framethrower_public.feedback_request ON feedback_request.animation_id = anim.id where feedback_request.status ='requested' and anim.id = animation.id);
  $$ language sql stable;
  grant execute on function framethrower_public.animation_pending_feedback(framethrower_public.animation) to framethrower_anonymous, framethrower_inactive, framethrower_banned, framethrower_user, framethrower_moderator, framethrower_admin;

commit;