-- Revert flipr:framethrower_hidden.table.submission_rejected from pg

begin;

  drop table if exists framethrower_hidden.submission_rejected;

commit;
