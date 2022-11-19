-- Revert flipr:framethrower.role.framethrower_inactive from pg

begin;

  drop OWNED by framethrower_inactive;
  drop role if exists framethrower_inactive;

commit;
