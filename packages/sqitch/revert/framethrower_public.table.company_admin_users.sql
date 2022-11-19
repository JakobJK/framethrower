-- Revert flipr:framethrower_private.company_admin_users from pg

begin;

  drop table if exists framethrower_public.company_admin_users;

commit;