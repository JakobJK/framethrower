-- deploy flipr:framethrower_public.table.animation to pg

begin;

  create table framethrower_public.animation(
    id text primary key not null default framethrower_hidden.generate_short_unique_id('framethrower_public.animation', 9),
    title text,
    discipline framethrower_public.discipline not null default 'animation',
    profile_id uuid references framethrower_public.profile(id),
    status framethrower_public.publish_status not null default 'published'
  );

  grant select on table framethrower_public.animation to framethrower_anonymous, framethrower_inactive, framethrower_user, framethrower_moderator, framethrower_admin;

commit;
