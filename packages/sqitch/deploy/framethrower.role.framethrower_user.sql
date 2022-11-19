-- Deploy flipr:framethrower.role.framethrower_user to pg

begin;

  create role framethrower_user;
  grant usage on schema framethrower_public to framethrower_user;

commit;
