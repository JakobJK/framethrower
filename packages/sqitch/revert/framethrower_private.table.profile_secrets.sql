-- Revert flipr:framethrower_private.table.profile_secrets from pg

begin;

  drop table if exists framethrower_private.profile_secrets;

commit;
