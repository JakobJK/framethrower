-- Deploy flipr:framethrower_hidden.table.feature_flag to pg

begin;
  create table framethrower_hidden.feature_flag(
    id uuid primary key not null default uuid_generate_v4(),
    name text not null,
    status framethrower_hidden.feature_flag_status not null default 'inactive'
  );
commit;
