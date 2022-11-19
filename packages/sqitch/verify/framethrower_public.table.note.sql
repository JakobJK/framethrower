-- Verify flipr:framethrower_public.table.note on pg

begin;

  create or replace function framethrower_public.test_note() returns boolean as $$
    declare profile1 framethrower_public.profile;
    declare animation1 framethrower_public.animation;
    declare submission1 framethrower_public.submission;
    begin

    insert into framethrower_public.profile(username, firstname, lastname) values ('mrBobby', 'MrJackson', 'ForReal') returning * into profile1;


    insert into framethrower_public.animation(
      title,
      profile_id
    ) values (
      'My_Animation',
      profile1.id
    ) returning * into animation1;

    insert into framethrower_public.submission (thumbnail_url, animation_id, comment, start_frame, end_frame) values ('this-is-such-a-random-ass-url', animation1.id, 'What a comment!', 1, 240) returning * into submission1;

    insert into framethrower_public.note (submission_id, paragraph, body, profile_id)
    values (submission1.id, 'paragraph','vnfosnvoisn40320432004321fimvremvieovmsiomvsoi', profile1.id);


    perform 1/count(*) from framethrower_public.note
    where body = 'vnfosnvoisn40320432004321fimvremvieovmsiomvsoi';

    return true;
  end;
  $$ language plpgsql;

  select framethrower_public.test_note();

rollback;
