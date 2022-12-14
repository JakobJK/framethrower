begin;
  select plan(6);
  select has_role('framethrower_user', 'framethrower_user role exists' );
  select has_role('framethrower_postgraphile', 'framethrower_postgraphile role exists' );
  select has_role('framethrower_moderator', 'framethrower_moderator role exists' );
  select has_role('framethrower_admin', 'framethrower_admin role exists' );
  select has_role('framethrower_banned', 'framethrower_banned role exists' );
  select has_role('framethrower_inactive', 'framethrower_inactive role exists');
  select * from finish();
rollback;