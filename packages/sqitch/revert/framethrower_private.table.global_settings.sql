-- Revert flipr:framethrower_private.table.global_settings from pg

begin;

  drop table if exists framethrower_private.global_settings;

commit;