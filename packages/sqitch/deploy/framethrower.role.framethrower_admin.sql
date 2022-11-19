-- Deploy flipr:framethrower.role.framethrower_admin to pg

begin;

  create role framethrower_admin;
  grant usage on schema framethrower_public to framethrower_admin;

commit;
