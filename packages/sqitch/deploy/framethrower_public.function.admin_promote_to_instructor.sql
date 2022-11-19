-- Deploy framethrower:framethrower_public.function.promote_to_instructor to pg

begin;

  create or replace function framethrower_public.admin_promote_to_instructor(
    profile_id_ uuid
    )returns framethrower_public.instructor as $$
      insert into
      framethrower_public.instructor (profile_id, status)
      values (profile_id_, 'active')
      returning *;
  $$ language sql security definer;
  grant execute on function framethrower_public.admin_promote_to_instructor(uuid) to framethrower_admin;

commit;
