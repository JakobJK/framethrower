-- Revert flipr:framethrower_hidden.function.generate_short_unique_id from pg

begin;

  drop function if exists framethrower_hidden.generate_short_unique_id(text, int);

commit;
