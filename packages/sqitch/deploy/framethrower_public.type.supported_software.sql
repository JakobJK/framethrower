-- Deploy flipr:framethrower_hidden.type.framethrower_plugin_version to pg

begin;

  create type framethrower_public.supported_software as enum ('maya', '3dsmax', 'modo', 'houdini', 'blender');

commit;
