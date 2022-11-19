begin;
  select plan(1);

select functions_are(
    'framethrower_hidden',
    array['generate_short_unique_id'
    ]
);

   select * from finish();
rollback;