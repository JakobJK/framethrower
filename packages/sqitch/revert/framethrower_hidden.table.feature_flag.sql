-- Revert flipr:framethrower_hidden.feature_flag from pg

begin;

  drop table if exists framethrower_hidden.feature_flag;

commit;
