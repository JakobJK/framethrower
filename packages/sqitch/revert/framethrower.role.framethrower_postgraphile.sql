-- Revert flipr:framethrower.role.framethrower_postgraphile from pg

begin;

  drop OWNED by framethrower_postgraphile;
  drop role if exists framethrower_postgraphile;

commit;
