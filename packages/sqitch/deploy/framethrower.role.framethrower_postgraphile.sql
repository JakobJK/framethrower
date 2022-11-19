-- Deploy flipr:framethrower.role.framethrower_postgraphile to pg

begin;

  create role framethrower_postgraphile login password 'ayx';

commit;
