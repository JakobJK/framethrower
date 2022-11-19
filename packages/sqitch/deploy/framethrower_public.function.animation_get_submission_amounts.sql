-- Deploy flipr:framethrower_public.function.animation_get_submission_amounts to pg


begin;

  create function framethrower_public.animation_get_submission_amounts(animation framethrower_public.animation) returns bigint  as $$
    select count(*) from framethrower_public.submission where submission.animation_id = animation.id
  $$ language sql stable;
  grant execute on function framethrower_public.animation_get_submission_amounts(framethrower_public.animation) to framethrower_anonymous, framethrower_inactive, framethrower_banned, framethrower_user, framethrower_moderator, framethrower_admin;

commit;
