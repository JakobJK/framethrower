-- Verify flipr:framethrower_public.table.animation on pg

begin;

  create or replace function framethrower_public.test_animation() returns boolean as $$
    declare profile1 framethrower_public.profile;
    begin

    perform 1/count(*) from information_schema.tables
    where  table_schema = 'framethrower_public'
    and    table_name   = 'animation';

    insert into framethrower_public.profile(username, firstname, lastname) values ('MySillyName', 'mrjackson', 'forreal') returning * into profile1;


    insert into framethrower_public.animation(
      title,
      profile_id
    ) values (
      'my_animation',
      profile1.id
    );

    perform 1/count(*) from framethrower_public.animation
    where title = 'my_animation';

    return true;
  end;
  $$ language plpgsql;

  select framethrower_public.test_animation();

rollback;
