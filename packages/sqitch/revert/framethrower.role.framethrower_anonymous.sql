-- Revert flipr:framethrower.role.framethrower_anonymous from pg

begin;

  drop OWNED by framethrower_anonymous;
  drop role if exists framethrower_anonymous;

commit;
