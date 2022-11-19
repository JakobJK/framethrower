-- Revert flipr:framethrower.extension.uuid-ossp from pg

begin;

  drop extension if exists "uuid-ossp" cascade;

commit;
