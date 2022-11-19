-- Revert flipr:framethrower.role.framethrower_user from pg

begin;

  drop OWNED by framethrower_user;
  drop role if exists framethrower_user;

commit;
