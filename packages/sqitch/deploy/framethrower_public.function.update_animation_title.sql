-- Deploy flipr:framethrower_public.function.update_animation_title to pg


begin;
  create or replace function framethrower_public.update_animation_title(animation_id_ text, title_ text)
    returns framethrower_public.animation as $$
      update framethrower_public.animation set title = title_ where profile_id = current_setting('jwt.claims.id', true)::uuid returning *;
    $$ language sql security definer;
  grant execute on function framethrower_public.update_animation_title(text, text) to framethrower_user, framethrower_moderator, framethrower_admin;
commit;
