-- Revert flipr:framethrower_hidden.table.issued_tokens from pg

begin;

  drop table if exists framethrower_hidden.issued_tokens;

commit;
