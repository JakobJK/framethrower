-- Verify flipr:framethrower_hidden.type.framethrower_plugin_version on pg

begin;

  select 1/count(*) from pg_type where typname = 'supported_software';

rollback;
