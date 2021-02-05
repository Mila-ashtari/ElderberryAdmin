<Grid container direction="column" spacing={2}>
<Grid item>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
    >
      <Typography variant="h2">Profile</Typography>
    </AccordionSummary>
    <AccordionDetails>{renderProfile(profile[0])}</AccordionDetails>
  </Accordion>
</Grid>
<Grid item>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography variant="h2">Documents</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <List>
        <ListItem>
          <Link
            href={documents[0].opswaCard}
            target="_blank"
            rel="noopener"
          >
            OPSWA Card
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={documents[0].proofOfWorkEligibility}
            target="_blank"
            rel="noopener"
          >
            Proof of work eligibility
          </Link>
        </ListItem>
      </List>
    </AccordionDetails>
  </Accordion>
</Grid>
<Grid item>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography variant="h2">Skills</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <List>
        <ListItem>
          <Link
            href={documents[0].opswaCard}
            target="_blank"
            rel="noopener"
          >
            OPSWA Card
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={documents[0].proofOfWorkEligibility}
            target="_blank"
            rel="noopener"
          >
            Proof of work eligibility
          </Link>
        </ListItem>
      </List>
    </AccordionDetails>
  </Accordion>
</Grid>
</Grid>