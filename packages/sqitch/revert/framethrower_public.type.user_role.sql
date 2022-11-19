-- Revert flipr:framethrower_hidden.type.user_role from pg

begin;

  drop type if exists framethrower_public.user_role cascade;

commit;
