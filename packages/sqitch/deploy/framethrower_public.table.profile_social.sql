-- Deploy flipr:framethrower_public.table.profile_social to pg

-- Deploy flipr:framethrower_public.table.profile to pg

begin;

  create table framethrower_public.profile_social(
    profile_id uuid NOT NULL UNIQUE REFERENCES framethrower_public.profile(id) ON DELETE CASCADE,
    facebook text,
    instagram text,
    twitter text,
    linkedin text,
    artstation text,
    vimeo text,
    youtube text,
    www text
  );

  grant select on table framethrower_public.profile_social  to framethrower_inactive, framethrower_banned, framethrower_anonymous, framethrower_user, framethrower_admin;
  grant insert, update on table framethrower_public.profile_social to  framethrower_banned, framethrower_inactive, framethrower_user, framethrower_moderator, framethrower_admin;

commit;
