-- Revert flipr:framethrower_hidden.type.feature_flag_status from pg

begin;

  drop type if exists framethrower_hidden.feature_flag_status;

commit;
