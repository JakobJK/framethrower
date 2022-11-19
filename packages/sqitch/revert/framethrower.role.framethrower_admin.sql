-- Revert flipr:framethrower.role.framethrower_admin from pg

begin;

  drop OWNED by framethrower_admin;
  drop role if exists framethrower_admin;

commit;
