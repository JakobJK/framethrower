-- Revert flipr:framethrower.extension.pgcrypto from pg

begin;

  drop extension if exists pgcrypto cascade;

commit;
