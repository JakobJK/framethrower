-- Deploy flipr:framethrower_hidden.type.feature_flag_status to pg

begin;

  create type framethrower_hidden.feature_flag_status as enum ('active', 'inactive');

commit;