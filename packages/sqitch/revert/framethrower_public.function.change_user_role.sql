-- Revert flipr:framethrower_public.function.change_user_role from pg

begin;

  drop function if exists framethrower_public.change_user_role(framethrower_public.user_role, uuid);

commit;
