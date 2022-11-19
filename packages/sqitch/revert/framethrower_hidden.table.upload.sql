-- Revert flipr:framethrower_hidden.table.uploads from pg

begin;

  drop table framethrower_hidden.upload;

commit;
