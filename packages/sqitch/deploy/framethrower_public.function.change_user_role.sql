-- Deploy flipr:framethrower_public.function.change_user_role to pg

begin;
  create or replace function framethrower_public.change_user_role(role_ framethrower_public.user_role, userid_ uuid)
    returns framethrower_public.profile as $$
      update framethrower_public.profile set role = role_ where id = userid_ returning *;
    $$ language sql strict;
    grant execute on function framethrower_public.change_user_role(framethrower_public.user_role, uuid) to framethrower_admin;
commit;
