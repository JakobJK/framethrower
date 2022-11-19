-- Deploy flipr:framethrower_public.table.instructor to pg

begin;

  create table framethrower_public.instructor(
    id TEXT PRIMARY KEY NOT NULL DEFAULT framethrower_hidden.generate_short_unique_id('framethrower_public.instructor', 9),
    profile_id uuid NOT NULL REFERENCES framethrower_public.profile(id) ON DELETE CASCADE UNIQUE,
    created_at  timestamptz not null default now(),
    updated_at  timestamptz not null default now(),
    accepted_agreement boolean default false,
    biography text,
    banner text,
    availability framethrower_public.instructor_availability NOT NULL DEFAULT 'available',
    status framethrower_public.instructor_status NOT NULL DEFAULT 'unpublished'
  );


  grant select on table framethrower_public.instructor to framethrower_inactive, framethrower_anonymous,framethrower_user, framethrower_moderator, framethrower_admin;
  grant insert on table framethrower_public.instructor to framethrower_admin;
  grant update on table framethrower_public.instructor to framethrower_user, framethrower_anonymous, framethrower_moderator, framethrower_admin;

commit;
