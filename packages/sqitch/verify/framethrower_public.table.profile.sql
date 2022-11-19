-- Verify flipr:framethrower_public.table.profile on pg

begin;

  insert into framethrower_public.profile(
    username,
    firstname,
    lastname,
    avatar
  ) values (
    'TotallYSillyUserName',
    'Jake',
    'Kousholt',
    '/photo.jpg'
  );

  select 1/count(*) from framethrower_public.profile
  where username = 'TotallYSillyUserName';

rollback;
