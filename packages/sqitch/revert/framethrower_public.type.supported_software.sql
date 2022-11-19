-- Revert flipr:framethrower_hidden.type.framethrower_plugin_version from pg

begin;

  drop type if exists framethrower_public.supported_software cascade;

commit;
