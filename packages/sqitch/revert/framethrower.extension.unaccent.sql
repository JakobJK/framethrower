-- Revert flipr:framethrower.extension.unaccent from pg

begin;

  drop extension if exists unaccent cascade;

commit;