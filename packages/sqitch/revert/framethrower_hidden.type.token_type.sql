-- Revert flipr:framethrower_hidden.type.token_type from pg

begin;

  drop type if exists framethrower_hidden.token_type;

commit;
