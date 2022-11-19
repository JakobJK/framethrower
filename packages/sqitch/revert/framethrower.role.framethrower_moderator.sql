-- Revert flipr:framethrower.role.framethrower_moderator from pg

begin;

  drop OWNED by framethrower_moderator;
  drop role if exists framethrower_moderator;

commit;
