-- Deploy flipr:framethrower.role.framethrower_anonymous to pg

begin;

  create role framethrower_anonymous;
  grant usage on schema framethrower_public to framethrower_anonymous;

commit;
