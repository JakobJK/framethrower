begin;

  create or replace function framethrower_public.delete_own_animation(animation_id text) returns text as $$
    update framethrower_public.animation set status = 'deleted' where id = animation_id and profile_id = current_setting('jwt.claims.id', true)::uuid returning animation.id;
  $$ language sql security definer;
  grant execute on function framethrower_public.delete_own_animation(text) to framethrower_user, framethrower_moderator, framethrower_admin;

commit;