-- Revert flipr:framethrower.role.framethrower_banned from pg

begin;

  drop OWNED by framethrower_banned;
  drop role if exists framethrower_banned;

commit;
